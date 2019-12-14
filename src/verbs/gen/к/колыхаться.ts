import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колыхаться: PerfectVerb = {
  name: Word('колыхаться', 5),
  singular1stPerson: Word('колышусь', 3),
  singular2ndPerson: Word('колышешься', 3),
  singular3rdPerson: Word('колышется', 3),
  plural1stPerson: Word('колышемся', 3),
  plural2ndPerson: Word('колышетесь', 3),
  plural3rdPerson: Word('колышутся', 3),
  masculinePast: Word('колыхался', 3),
  femininePast: Word('колыхалась', 3),
  neuterPast: Word('колыхалось', 3),
  pluralPast: Word('колыхались', 3),
  imperativeInformal: Word('колышься', 3),
  imperativeFormal: Word('колышьтесь', 3),
  imperfect: ['колыхнуться'],
};

perfectVerbs.set(колыхаться.name.text, колыхаться);

export { колыхаться };