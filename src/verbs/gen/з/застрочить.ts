import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застрочить: PerfectVerb = {
  name: Word('застрочить', 7),
  singular1stPerson: Word('застрочу', 7),
  singular2ndPerson: Word('застрочишь', 7),
  singular3rdPerson: Word('застрочит', 7),
  plural1stPerson: Word('застрочим', 7),
  plural2ndPerson: Word('застрочите', 7),
  plural3rdPerson: Word('застрочат', 7),
  masculinePast: Word('застрочил', 7),
  femininePast: Word('застрочила', 7),
  neuterPast: Word('застрочило', 7),
  pluralPast: Word('застрочили', 7),
  imperativeInformal: Word('застрочи', 7),
  imperativeFormal: Word('застрочите', 7),
  imperfect: [],
};

perfectVerbs.set(застрочить.name.text, застрочить);

export { застрочить };