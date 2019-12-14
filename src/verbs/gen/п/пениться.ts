import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пениться: PerfectVerb = {
  name: Word('пениться', 1),
  singular1stPerson: Word('пенюсь', 1),
  singular2ndPerson: Word('пенишься', 1),
  singular3rdPerson: Word('пенится', 1),
  plural1stPerson: Word('пенимся', 1),
  plural2ndPerson: Word('пенитесь', 1),
  plural3rdPerson: Word('пенятся', 1),
  masculinePast: Word('пенился', 1),
  femininePast: Word('пенилась', 1),
  neuterPast: Word('пенилось', 1),
  pluralPast: Word('пенились', 1),
  imperativeInformal: Word('пенься', 1),
  imperativeFormal: Word('пеньтесь', 1),
  imperfect: [],
};

perfectVerbs.set(пениться.name.text, пениться);

export { пениться };