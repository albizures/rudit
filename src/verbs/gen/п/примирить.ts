import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примирить: PerfectVerb = {
  name: Word('примирить', 6),
  singular1stPerson: Word('примирю', 6),
  singular2ndPerson: Word('примиришь', 6),
  singular3rdPerson: Word('примирит', 6),
  plural1stPerson: Word('примирим', 6),
  plural2ndPerson: Word('примирите', 6),
  plural3rdPerson: Word('примирят', 6),
  masculinePast: Word('примирил', 6),
  femininePast: Word('примирила', 6),
  neuterPast: Word('примирило', 6),
  pluralPast: Word('примирили', 6),
  imperativeInformal: Word('примири', 6),
  imperativeFormal: Word('примирите', 6),
  imperfect: [],
};

perfectVerbs.set(примирить.name.text, примирить);

export { примирить };