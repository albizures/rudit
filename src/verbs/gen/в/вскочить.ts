import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскочить: PerfectVerb = {
  name: Word('вскочить', 5),
  singular1stPerson: Word('вскочу', 5),
  singular2ndPerson: Word('вскочишь', 3),
  singular3rdPerson: Word('вскочит', 3),
  plural1stPerson: Word('вскочим', 3),
  plural2ndPerson: Word('вскочите', 3),
  plural3rdPerson: Word('вскочат', 3),
  masculinePast: Word('вскочил', 5),
  femininePast: Word('вскочила', 5),
  neuterPast: Word('вскочило', 5),
  pluralPast: Word('вскочили', 5),
  imperativeInformal: Word('вскочи', 5),
  imperativeFormal: Word('вскочите', 5),
  imperfect: ['вскакивать'],
};

perfectVerbs.set(вскочить.name.text, вскочить);

export { вскочить };