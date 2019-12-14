import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const силиться: PerfectVerb = {
  name: Word('силиться', 1),
  singular1stPerson: Word('силюсь', 1),
  singular2ndPerson: Word('силишься', 1),
  singular3rdPerson: Word('силится', 1),
  plural1stPerson: Word('силимся', 1),
  plural2ndPerson: Word('силитесь', 1),
  plural3rdPerson: Word('силятся', 1),
  masculinePast: Word('силился', 1),
  femininePast: Word('силилась', 1),
  neuterPast: Word('силилось', 1),
  pluralPast: Word('силились', 1),
  imperativeInformal: Word('силься', 1),
  imperativeFormal: Word('сильтесь', 1),
  imperfect: [],
};

perfectVerbs.set(силиться.name.text, силиться);

export { силиться };