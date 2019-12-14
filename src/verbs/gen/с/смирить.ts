import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смирить: PerfectVerb = {
  name: Word('смирить', 4),
  singular1stPerson: Word('смирю', 4),
  singular2ndPerson: Word('смиришь', 4),
  singular3rdPerson: Word('смирит', 4),
  plural1stPerson: Word('смирим', 4),
  plural2ndPerson: Word('смирите', 4),
  plural3rdPerson: Word('смирят', 4),
  masculinePast: Word('смирил', 4),
  femininePast: Word('смирила', 4),
  neuterPast: Word('смирило', 4),
  pluralPast: Word('смирили', 4),
  imperativeInformal: Word('смири', 4),
  imperativeFormal: Word('смирите', 4),
  imperfect: [],
};

perfectVerbs.set(смирить.name.text, смирить);

export { смирить };