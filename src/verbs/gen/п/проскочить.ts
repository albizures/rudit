import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проскочить: PerfectVerb = {
  name: Word('проскочить', 7),
  singular1stPerson: Word('проскочу', 7),
  singular2ndPerson: Word('проскочишь', 5),
  singular3rdPerson: Word('проскочит', 5),
  plural1stPerson: Word('проскочим', 5),
  plural2ndPerson: Word('проскочите', 5),
  plural3rdPerson: Word('проскочат', 5),
  masculinePast: Word('проскочил', 7),
  femininePast: Word('проскочила', 7),
  neuterPast: Word('проскочило', 7),
  pluralPast: Word('проскочили', 7),
  imperativeInformal: Word('проскочи', 7),
  imperativeFormal: Word('проскочите', 7),
  imperfect: [],
};

perfectVerbs.set(проскочить.name.text, проскочить);

export { проскочить };