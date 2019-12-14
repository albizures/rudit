import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покурить: PerfectVerb = {
  name: Word('покурить', 5),
  singular1stPerson: Word('покурю', 5),
  singular2ndPerson: Word('покуришь', 3),
  singular3rdPerson: Word('покурит', 3),
  plural1stPerson: Word('покурим', 3),
  plural2ndPerson: Word('покурите', 3),
  plural3rdPerson: Word('покурят', 3),
  masculinePast: Word('покурил', 5),
  femininePast: Word('покурила', 5),
  neuterPast: Word('покурило', 5),
  pluralPast: Word('покурили', 5),
  imperativeInformal: Word('покури', 5),
  imperativeFormal: Word('покурите', 5),
  imperfect: ['курить'],
};

perfectVerbs.set(покурить.name.text, покурить);

export { покурить };