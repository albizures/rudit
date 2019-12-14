import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порочить: PerfectVerb = {
  name: Word('порочить', 3),
  singular1stPerson: Word('порочу', 3),
  singular2ndPerson: Word('порочишь', 3),
  singular3rdPerson: Word('порочит', 3),
  plural1stPerson: Word('порочим', 3),
  plural2ndPerson: Word('порочите', 3),
  plural3rdPerson: Word('порочат', 3),
  masculinePast: Word('порочил', 3),
  femininePast: Word('порочила', 3),
  neuterPast: Word('порочило', 3),
  pluralPast: Word('порочили', 3),
  imperativeInformal: Word('порочь', 3),
  imperativeFormal: Word('порочьте', 3),
  imperfect: [],
};

perfectVerbs.set(порочить.name.text, порочить);

export { порочить };