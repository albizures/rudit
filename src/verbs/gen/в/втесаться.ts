import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втесаться: PerfectVerb = {
  name: Word('втесаться', 4),
  singular1stPerson: Word('втешусь', 4),
  singular2ndPerson: Word('втешешься', 2),
  singular3rdPerson: Word('втешется', 2),
  plural1stPerson: Word('втешемся', 2),
  plural2ndPerson: Word('втешетесь', 2),
  plural3rdPerson: Word('втешутся', 2),
  masculinePast: Word('втесался', 4),
  femininePast: Word('втесалась', 4),
  neuterPast: Word('втесалось', 4),
  pluralPast: Word('втесались', 4),
  imperativeInformal: Word('втешись', 4),
  imperativeFormal: Word('втешитесь', 4),
  imperfect: [],
};

perfectVerbs.set(втесаться.name.text, втесаться);

export { втесаться };