import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размешаться: PerfectVerb = {
  name: Word('размешаться', 6),
  singular1stPerson: Word('размешаюсь', 6),
  singular2ndPerson: Word('размешаешься', 6),
  singular3rdPerson: Word('размешается', 6),
  plural1stPerson: Word('размешаемся', 6),
  plural2ndPerson: Word('размешаетесь', 6),
  plural3rdPerson: Word('размешаются', 6),
  masculinePast: Word('размешался', 6),
  femininePast: Word('размешалась', 6),
  neuterPast: Word('размешалось', 6),
  pluralPast: Word('размешались', 6),
  imperativeInformal: Word('размешайся', 6),
  imperativeFormal: Word('размешайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(размешаться.name.text, размешаться);

export { размешаться };