import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const морочить: PerfectVerb = {
  name: Word('морочить', 3),
  singular1stPerson: Word('морочу', 3),
  singular2ndPerson: Word('морочишь', 3),
  singular3rdPerson: Word('морочит', 3),
  plural1stPerson: Word('морочим', 3),
  plural2ndPerson: Word('морочите', 3),
  plural3rdPerson: Word('морочат', 3),
  masculinePast: Word('морочил', 3),
  femininePast: Word('морочила', 3),
  neuterPast: Word('морочило', 3),
  pluralPast: Word('морочили', 3),
  imperativeInformal: Word('морочь', 3),
  imperativeFormal: Word('морочьте', 3),
  imperfect: [],
};

perfectVerbs.set(морочить.name.text, морочить);

export { морочить };