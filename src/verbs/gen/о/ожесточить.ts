import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ожесточить: PerfectVerb = {
  name: Word('ожесточить', 7),
  singular1stPerson: Word('ожесточу', 7),
  singular2ndPerson: Word('ожесточишь', 7),
  singular3rdPerson: Word('ожесточит', 7),
  plural1stPerson: Word('ожесточим', 7),
  plural2ndPerson: Word('ожесточите', 7),
  plural3rdPerson: Word('ожесточат', 7),
  masculinePast: Word('ожесточил', 7),
  femininePast: Word('ожесточила', 7),
  neuterPast: Word('ожесточило', 7),
  pluralPast: Word('ожесточили', 7),
  imperativeInformal: Word('ожесточи', 7),
  imperativeFormal: Word('ожесточите', 7),
  imperfect: [],
};

perfectVerbs.set(ожесточить.name.text, ожесточить);

export { ожесточить };