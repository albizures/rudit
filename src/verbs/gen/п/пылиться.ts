import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пылиться: PerfectVerb = {
  name: Word('пылиться', 3),
  singular1stPerson: Word('пылюсь', 3),
  singular2ndPerson: Word('пылишься', 3),
  singular3rdPerson: Word('пылится', 3),
  plural1stPerson: Word('пылимся', 3),
  plural2ndPerson: Word('пылитесь', 3),
  plural3rdPerson: Word('пылятся', 3),
  masculinePast: Word('пылился', 3),
  femininePast: Word('пылилась', 3),
  neuterPast: Word('пылилось', 3),
  pluralPast: Word('пылились', 3),
  imperativeInformal: Word('пылись', 3),
  imperativeFormal: Word('пылитесь', 3),
  imperfect: [],
};

perfectVerbs.set(пылиться.name.text, пылиться);

export { пылиться };