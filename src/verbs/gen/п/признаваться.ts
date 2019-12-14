import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const признаваться: PerfectVerb = {
  name: Word('признаваться', 7),
  singular1stPerson: Word('признаюсь', 6),
  singular2ndPerson: Word('признаёшься', 6),
  singular3rdPerson: Word('признаётся', 6),
  plural1stPerson: Word('признаёмся', 6),
  plural2ndPerson: Word('признаётесь', 6),
  plural3rdPerson: Word('признаются', 6),
  masculinePast: Word('признавался', 7),
  femininePast: Word('признавалась', 7),
  neuterPast: Word('признавалось', 7),
  pluralPast: Word('признавались', 7),
  imperativeInformal: Word('признавайся', 7),
  imperativeFormal: Word('признавайтесь', 7),
  imperfect: ['признаться'],
};

perfectVerbs.set(признаваться.name.text, признаваться);

export { признаваться };