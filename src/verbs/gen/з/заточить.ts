import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заточить: PerfectVerb = {
  name: Word('заточить', 5),
  singular1stPerson: Word('заточу', 5),
  singular2ndPerson: Word('заточишь', 3),
  singular3rdPerson: Word('заточит', 3),
  plural1stPerson: Word('заточим', 3),
  plural2ndPerson: Word('заточите', 3),
  plural3rdPerson: Word('заточат', 3),
  masculinePast: Word('заточил', 5),
  femininePast: Word('заточила', 5),
  neuterPast: Word('заточило', 5),
  pluralPast: Word('заточили', 5),
  imperativeInformal: Word('заточи', 5),
  imperativeFormal: Word('заточите', 5),
  imperfect: [],
};

perfectVerbs.set(заточить.name.text, заточить);

export { заточить };