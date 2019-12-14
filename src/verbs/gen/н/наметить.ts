import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наметить: PerfectVerb = {
  name: Word('наметить', 3),
  singular1stPerson: Word('намечу', 3),
  singular2ndPerson: Word('наметишь', 3),
  singular3rdPerson: Word('наметит', 3),
  plural1stPerson: Word('наметим', 3),
  plural2ndPerson: Word('наметите', 3),
  plural3rdPerson: Word('наметят', 3),
  masculinePast: Word('наметил', 3),
  femininePast: Word('наметила', 3),
  neuterPast: Word('наметило', 3),
  pluralPast: Word('наметили', 3),
  imperativeInformal: Word('наметь', 3),
  imperativeFormal: Word('наметьте', 3),
  imperfect: [],
};

perfectVerbs.set(наметить.name.text, наметить);

export { наметить };