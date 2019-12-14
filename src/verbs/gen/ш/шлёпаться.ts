import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шлёпаться: PerfectVerb = {
  name: Word('шлёпаться', 4),
  singular1stPerson: Word('шлёпаюсь', 4),
  singular2ndPerson: Word('шлёпаешься', 4),
  singular3rdPerson: Word('шлёпается', 4),
  plural1stPerson: Word('шлёпаемся', 4),
  plural2ndPerson: Word('шлёпаетесь', 4),
  plural3rdPerson: Word('шлёпаются', 4),
  masculinePast: Word('шлёпался', 4),
  femininePast: Word('шлёпалась', 4),
  neuterPast: Word('шлёпалось', 4),
  pluralPast: Word('шлёпались', 4),
  imperativeInformal: Word('шлёпайся', 4),
  imperativeFormal: Word('шлёпайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(шлёпаться.name.text, шлёпаться);

export { шлёпаться };