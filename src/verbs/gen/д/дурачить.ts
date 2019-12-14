import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дурачить: PerfectVerb = {
  name: Word('дурачить', 3),
  singular1stPerson: Word('дурачу', 3),
  singular2ndPerson: Word('дурачишь', 3),
  singular3rdPerson: Word('дурачит', 3),
  plural1stPerson: Word('дурачим', 3),
  plural2ndPerson: Word('дурачите', 3),
  plural3rdPerson: Word('дурачат', 3),
  masculinePast: Word('дурачил', 3),
  femininePast: Word('дурачила', 3),
  neuterPast: Word('дурачило', 3),
  pluralPast: Word('дурачили', 3),
  imperativeInformal: Word('дурачь', 3),
  imperativeFormal: Word('дурачьте', 3),
  imperfect: [],
};

perfectVerbs.set(дурачить.name.text, дурачить);

export { дурачить };