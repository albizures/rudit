import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маслиться: PerfectVerb = {
  name: Word('маслиться', 1),
  singular1stPerson: Word('маслюсь', 1),
  singular2ndPerson: Word('маслишься', 1),
  singular3rdPerson: Word('маслится', 1),
  plural1stPerson: Word('маслимся', 1),
  plural2ndPerson: Word('маслитесь', 1),
  plural3rdPerson: Word('маслятся', 1),
  masculinePast: Word('маслился', 1),
  femininePast: Word('маслилась', 1),
  neuterPast: Word('маслилось', 1),
  pluralPast: Word('маслились', 1),
  imperativeInformal: Word('маслись', 1),
  imperativeFormal: Word('маслитесь', 1),
  imperfect: [],
};

perfectVerbs.set(маслиться.name.text, маслиться);

export { маслиться };