import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрыться: PerfectVerb = {
  name: Word('прикрыться', 5),
  singular1stPerson: Word('прикроюсь', 5),
  singular2ndPerson: Word('прикроешься', 5),
  singular3rdPerson: Word('прикроется', 5),
  plural1stPerson: Word('прикроемся', 5),
  plural2ndPerson: Word('прикроетесь', 5),
  plural3rdPerson: Word('прикроются', 5),
  masculinePast: Word('прикрылся', 5),
  femininePast: Word('прикрылась', 5),
  neuterPast: Word('прикрылось', 5),
  pluralPast: Word('прикрылись', 5),
  imperativeInformal: Word('прикройся', 5),
  imperativeFormal: Word('прикройтесь', 5),
  imperfect: [],
};

perfectVerbs.set(прикрыться.name.text, прикрыться);

export { прикрыться };