import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const волочить: PerfectVerb = {
  name: Word('волочить', 5),
  singular1stPerson: Word('волочу', 5),
  singular2ndPerson: Word('волочишь', 3),
  singular3rdPerson: Word('волочит', 3),
  plural1stPerson: Word('волочим', 3),
  plural2ndPerson: Word('волочите', 3),
  plural3rdPerson: Word('волочат', 3),
  masculinePast: Word('волочил', 5),
  femininePast: Word('волочила', 5),
  neuterPast: Word('волочило', 5),
  pluralPast: Word('волочили', 5),
  imperativeInformal: Word('волочи', 5),
  imperativeFormal: Word('волочите', 5),
  imperfect: ['уволочь'],
};

perfectVerbs.set(волочить.name.text, волочить);

export { волочить };