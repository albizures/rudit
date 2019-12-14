import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набычиться: PerfectVerb = {
  name: Word('набычиться', 3),
  singular1stPerson: Word('набычусь', 3),
  singular2ndPerson: Word('набычишься', 3),
  singular3rdPerson: Word('набычится', 3),
  plural1stPerson: Word('набычимся', 3),
  plural2ndPerson: Word('набычитесь', 3),
  plural3rdPerson: Word('набычатся', 3),
  masculinePast: Word('набычился', 3),
  femininePast: Word('набычилась', 3),
  neuterPast: Word('набычилось', 3),
  pluralPast: Word('набычились', 3),
  imperativeInformal: Word('набычься', 3),
  imperativeFormal: Word('набычьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(набычиться.name.text, набычиться);

export { набычиться };