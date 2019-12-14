import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const валиться: PerfectVerb = {
  name: Word('валиться', 3),
  singular1stPerson: Word('валюсь', 3),
  singular2ndPerson: Word('валишься', 1),
  singular3rdPerson: Word('валится', 1),
  plural1stPerson: Word('валимся', 1),
  plural2ndPerson: Word('валитесь', 1),
  plural3rdPerson: Word('валятся', 1),
  masculinePast: Word('валился', 3),
  femininePast: Word('валилась', 3),
  neuterPast: Word('валилось', 3),
  pluralPast: Word('валились', 3),
  imperativeInformal: Word('вались', 3),
  imperativeFormal: Word('валитесь', 3),
  imperfect: [],
};

perfectVerbs.set(валиться.name.text, валиться);

export { валиться };