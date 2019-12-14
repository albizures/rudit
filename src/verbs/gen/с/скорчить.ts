import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скорчить: PerfectVerb = {
  name: Word('скорчить', 2),
  singular1stPerson: Word('скорчу', 2),
  singular2ndPerson: Word('скорчишь', 2),
  singular3rdPerson: Word('скорчит', 2),
  plural1stPerson: Word('скорчим', 2),
  plural2ndPerson: Word('скорчите', 2),
  plural3rdPerson: Word('скорчат', 2),
  masculinePast: Word('скорчил', 2),
  femininePast: Word('скорчила', 2),
  neuterPast: Word('скорчило', 2),
  pluralPast: Word('скорчили', 2),
  imperativeInformal: Word('скорчи//ско'рчь', 2),
  imperativeFormal: Word('скорчите//ско'рчьте', 2),
  imperfect: [],
};

perfectVerbs.set(скорчить.name.text, скорчить);

export { скорчить };