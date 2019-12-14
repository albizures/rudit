import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пружиниться: PerfectVerb = {
  name: Word('пружиниться', 4),
  singular1stPerson: Word('пружинюсь', 4),
  singular2ndPerson: Word('пружинишься', 4),
  singular3rdPerson: Word('пружинится', 4),
  plural1stPerson: Word('пружинимся', 4),
  plural2ndPerson: Word('пружинитесь', 4),
  plural3rdPerson: Word('пружинятся', 4),
  masculinePast: Word('пружинился', 4),
  femininePast: Word('пружинилась', 4),
  neuterPast: Word('пружинилось', 4),
  pluralPast: Word('пружинились', 4),
  imperativeInformal: Word('пружинься', 4),
  imperativeFormal: Word('пружиньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(пружиниться.name.text, пружиниться);

export { пружиниться };