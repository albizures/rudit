import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шлёпаться: PerfectVerb = {
  name: Word('шлёпаться', 2),
  singular1stPerson: Word('шлёпаюсь', 2),
  singular2ndPerson: Word('шлёпаешься', 2),
  singular3rdPerson: Word('шлёпается', 2),
  plural1stPerson: Word('шлёпаемся', 2),
  plural2ndPerson: Word('шлёпаетесь', 2),
  plural3rdPerson: Word('шлёпаются', 2),
  masculinePast: Word('шлёпался', 2),
  femininePast: Word('шлёпалась', 2),
  neuterPast: Word('шлёпалось', 2),
  pluralPast: Word('шлёпались', 2),
  imperativeInformal: Word('шлёпайся', 2),
  imperativeFormal: Word('шлёпайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(шлёпаться.name.text, шлёпаться);

export { шлёпаться };