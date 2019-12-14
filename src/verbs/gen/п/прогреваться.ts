import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогреваться: PerfectVerb = {
  name: Word('прогреваться', 7),
  singular1stPerson: Word('прогреваюсь', 7),
  singular2ndPerson: Word('прогреваешься', 7),
  singular3rdPerson: Word('прогревается', 7),
  plural1stPerson: Word('прогреваемся', 7),
  plural2ndPerson: Word('прогреваетесь', 7),
  plural3rdPerson: Word('прогреваются', 7),
  masculinePast: Word('прогревался', 7),
  femininePast: Word('прогревалась', 7),
  neuterPast: Word('прогревалось', 7),
  pluralPast: Word('прогревались', 7),
  imperativeInformal: Word('прогревайся', 7),
  imperativeFormal: Word('прогревайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(прогреваться.name.text, прогреваться);

export { прогреваться };