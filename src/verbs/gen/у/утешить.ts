import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утешить: PerfectVerb = {
  name: Word('утешить', 2),
  singular1stPerson: Word('утешу', 2),
  singular2ndPerson: Word('утешишь', 2),
  singular3rdPerson: Word('утешит', 2),
  plural1stPerson: Word('утешим', 2),
  plural2ndPerson: Word('утешите', 2),
  plural3rdPerson: Word('утешат', 2),
  masculinePast: Word('утешил', 2),
  femininePast: Word('утешила', 2),
  neuterPast: Word('утешило', 2),
  pluralPast: Word('утешили', 2),
  imperativeInformal: Word('утешь', 2),
  imperativeFormal: Word('утешьте', 2),
  imperfect: ['утешать'],
};

perfectVerbs.set(утешить.name.text, утешить);

export { утешить };