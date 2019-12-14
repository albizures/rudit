import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const точить: PerfectVerb = {
  name: Word('точить', 3),
  singular1stPerson: Word('точу', 3),
  singular2ndPerson: Word('точишь', 1),
  singular3rdPerson: Word('точит', 1),
  plural1stPerson: Word('точим', 1),
  plural2ndPerson: Word('точите', 1),
  plural3rdPerson: Word('точат', 1),
  masculinePast: Word('точил', 3),
  femininePast: Word('точила', 3),
  neuterPast: Word('точило', 3),
  pluralPast: Word('точили', 3),
  imperativeInformal: Word('точи', 3),
  imperativeFormal: Word('точите', 3),
  imperfect: [],
};

perfectVerbs.set(точить.name.text, точить);

export { точить };