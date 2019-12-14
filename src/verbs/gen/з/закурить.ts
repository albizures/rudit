import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закурить: PerfectVerb = {
  name: Word('закурить', 5),
  singular1stPerson: Word('закурю', 5),
  singular2ndPerson: Word('закуришь', 3),
  singular3rdPerson: Word('закурит', 3),
  plural1stPerson: Word('закурим', 3),
  plural2ndPerson: Word('закурите', 3),
  plural3rdPerson: Word('закурят', 3),
  masculinePast: Word('закурил', 5),
  femininePast: Word('закурила', 5),
  neuterPast: Word('закурило', 5),
  pluralPast: Word('закурили', 5),
  imperativeInformal: Word('закури', 5),
  imperativeFormal: Word('закурите', 5),
  imperfect: ['закуривать','курить'],
};

perfectVerbs.set(закурить.name.text, закурить);

export { закурить };