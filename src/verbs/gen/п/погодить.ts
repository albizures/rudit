import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погодить: PerfectVerb = {
  name: Word('погодить', 5),
  singular1stPerson: Word('погожу', 5),
  singular2ndPerson: Word('погодишь', 5),
  singular3rdPerson: Word('погодит', 5),
  plural1stPerson: Word('погодим', 5),
  plural2ndPerson: Word('погодите', 5),
  plural3rdPerson: Word('погодят', 5),
  masculinePast: Word('погодил', 5),
  femininePast: Word('погодила', 5),
  neuterPast: Word('погодило', 5),
  pluralPast: Word('погодили', 5),
  imperativeInformal: Word('погоди', 5),
  imperativeFormal: Word('погодите', 5),
  imperfect: ['годить'],
};

perfectVerbs.set(погодить.name.text, погодить);

export { погодить };