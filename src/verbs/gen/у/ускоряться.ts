import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ускоряться: PerfectVerb = {
  name: Word('ускоряться', 5),
  singular1stPerson: Word('ускоряюсь', 5),
  singular2ndPerson: Word('ускоряешься', 5),
  singular3rdPerson: Word('ускоряется', 5),
  plural1stPerson: Word('ускоряемся', 5),
  plural2ndPerson: Word('ускоряетесь', 5),
  plural3rdPerson: Word('ускоряются', 5),
  masculinePast: Word('ускорялся', 5),
  femininePast: Word('ускорялась', 5),
  neuterPast: Word('ускорялось', 5),
  pluralPast: Word('ускорялись', 5),
  imperativeInformal: Word('ускоряйся', 5),
  imperativeFormal: Word('ускоряйтесь', 5),
  imperfect: ['ускориться'],
};

perfectVerbs.set(ускоряться.name.text, ускоряться);

export { ускоряться };