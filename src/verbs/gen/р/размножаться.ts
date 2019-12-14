import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размножаться: PerfectVerb = {
  name: Word('размножаться', 7),
  singular1stPerson: Word('размножаюсь', 7),
  singular2ndPerson: Word('размножаешься', 7),
  singular3rdPerson: Word('размножается', 7),
  plural1stPerson: Word('размножаемся', 7),
  plural2ndPerson: Word('размножаетесь', 7),
  plural3rdPerson: Word('размножаются', 7),
  masculinePast: Word('размножался', 7),
  femininePast: Word('размножалась', 7),
  neuterPast: Word('размножалось', 7),
  pluralPast: Word('размножались', 7),
  imperativeInformal: Word('размножайся', 7),
  imperativeFormal: Word('размножайтесь', 7),
  imperfect: ['размножиться'],
};

perfectVerbs.set(размножаться.name.text, размножаться);

export { размножаться };