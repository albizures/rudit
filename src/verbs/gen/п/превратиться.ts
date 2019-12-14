import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превратиться: PerfectVerb = {
  name: Word('превратиться', 7),
  singular1stPerson: Word('превращусь', 7),
  singular2ndPerson: Word('превратишься', 7),
  singular3rdPerson: Word('превратится', 7),
  plural1stPerson: Word('превратимся', 7),
  plural2ndPerson: Word('превратитесь', 7),
  plural3rdPerson: Word('превратятся', 7),
  masculinePast: Word('превратился', 7),
  femininePast: Word('превратилась', 7),
  neuterPast: Word('превратилось', 7),
  pluralPast: Word('превратились', 7),
  imperativeInformal: Word('превратись', 7),
  imperativeFormal: Word('превратитесь', 7),
  imperfect: ['превращаться'],
};

perfectVerbs.set(превратиться.name.text, превратиться);

export { превратиться };