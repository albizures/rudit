import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размениваться: PerfectVerb = {
  name: Word('размениваться', 4),
  singular1stPerson: Word('размениваюсь', 4),
  singular2ndPerson: Word('размениваешься', 4),
  singular3rdPerson: Word('разменивается', 4),
  plural1stPerson: Word('размениваемся', 4),
  plural2ndPerson: Word('размениваетесь', 4),
  plural3rdPerson: Word('размениваются', 4),
  masculinePast: Word('разменивался', 4),
  femininePast: Word('разменивалась', 4),
  neuterPast: Word('разменивалось', 4),
  pluralPast: Word('разменивались', 4),
  imperativeInformal: Word('разменивайся', 4),
  imperativeFormal: Word('разменивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(размениваться.name.text, размениваться);

export { размениваться };