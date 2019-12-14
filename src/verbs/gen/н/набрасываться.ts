import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набрасываться: PerfectVerb = {
  name: Word('набрасываться', 4),
  singular1stPerson: Word('набрасываюсь', 4),
  singular2ndPerson: Word('набрасываешься', 4),
  singular3rdPerson: Word('набрасывается', 4),
  plural1stPerson: Word('набрасываемся', 4),
  plural2ndPerson: Word('набрасываетесь', 4),
  plural3rdPerson: Word('набрасываются', 4),
  masculinePast: Word('набрасывался', 4),
  femininePast: Word('набрасывалась', 4),
  neuterPast: Word('набрасывалось', 4),
  pluralPast: Word('набрасывались', 4),
  imperativeInformal: Word('набрасывайся', 4),
  imperativeFormal: Word('набрасывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(набрасываться.name.text, набрасываться);

export { набрасываться };