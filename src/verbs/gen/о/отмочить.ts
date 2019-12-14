import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмочить: PerfectVerb = {
  name: Word('отмочить', 5),
  singular1stPerson: Word('отмочу', 5),
  singular2ndPerson: Word('отмочишь', 3),
  singular3rdPerson: Word('отмочит', 3),
  plural1stPerson: Word('отмочим', 3),
  plural2ndPerson: Word('отмочите', 3),
  plural3rdPerson: Word('отмочат', 3),
  masculinePast: Word('отмочил', 5),
  femininePast: Word('отмочила', 5),
  neuterPast: Word('отмочило', 5),
  pluralPast: Word('отмочили', 5),
  imperativeInformal: Word('отмочи', 5),
  imperativeFormal: Word('отмочите', 5),
  imperfect: [],
};

perfectVerbs.set(отмочить.name.text, отмочить);

export { отмочить };