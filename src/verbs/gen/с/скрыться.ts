import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрыться: PerfectVerb = {
  name: Word('скрыться', 3),
  singular1stPerson: Word('скроюсь', 3),
  singular2ndPerson: Word('скроешься', 3),
  singular3rdPerson: Word('скроется', 3),
  plural1stPerson: Word('скроемся', 3),
  plural2ndPerson: Word('скроетесь', 3),
  plural3rdPerson: Word('скроются', 3),
  masculinePast: Word('скрылся', 3),
  femininePast: Word('скрылась', 3),
  neuterPast: Word('скрылось', 3),
  pluralPast: Word('скрылись', 3),
  imperativeInformal: Word('скройся', 3),
  imperativeFormal: Word('скройтесь', 3),
  imperfect: ['скрываться'],
};

perfectVerbs.set(скрыться.name.text, скрыться);

export { скрыться };