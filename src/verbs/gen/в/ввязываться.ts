import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввязываться: PerfectVerb = {
  name: Word('ввязываться', 2),
  singular1stPerson: Word('ввязываюсь', 2),
  singular2ndPerson: Word('ввязываешься', 2),
  singular3rdPerson: Word('ввязывается', 2),
  plural1stPerson: Word('ввязываемся', 2),
  plural2ndPerson: Word('ввязываетесь', 2),
  plural3rdPerson: Word('ввязываются', 2),
  masculinePast: Word('ввязывался', 2),
  femininePast: Word('ввязывалась', 2),
  neuterPast: Word('ввязывалось', 2),
  pluralPast: Word('ввязывались', 2),
  imperativeInformal: Word('ввязывайся', 2),
  imperativeFormal: Word('ввязывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(ввязываться.name.text, ввязываться);

export { ввязываться };