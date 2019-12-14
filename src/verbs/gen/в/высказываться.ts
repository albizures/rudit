import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высказываться: PerfectVerb = {
  name: Word('высказываться', 4),
  singular1stPerson: Word('высказываюсь', 4),
  singular2ndPerson: Word('высказываешься', 4),
  singular3rdPerson: Word('высказывается', 4),
  plural1stPerson: Word('высказываемся', 4),
  plural2ndPerson: Word('высказываетесь', 4),
  plural3rdPerson: Word('высказываются', 4),
  masculinePast: Word('высказывался', 4),
  femininePast: Word('высказывалась', 4),
  neuterPast: Word('высказывалось', 4),
  pluralPast: Word('высказывались', 4),
  imperativeInformal: Word('высказывайся', 4),
  imperativeFormal: Word('высказывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(высказываться.name.text, высказываться);

export { высказываться };