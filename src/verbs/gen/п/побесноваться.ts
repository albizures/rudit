import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побесноваться: PerfectVerb = {
  name: Word('побесноваться', 8),
  singular1stPerson: Word('побеснуюсь', 6),
  singular2ndPerson: Word('побеснуешься', 6),
  singular3rdPerson: Word('побеснуется', 6),
  plural1stPerson: Word('побеснуемся', 6),
  plural2ndPerson: Word('побеснуетесь', 6),
  plural3rdPerson: Word('побеснуются', 6),
  masculinePast: Word('побесновался', 8),
  femininePast: Word('побесновалась', 8),
  neuterPast: Word('побесновалось', 8),
  pluralPast: Word('побесновались', 8),
  imperativeInformal: Word('побеснуйся', 6),
  imperativeFormal: Word('побеснуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(побесноваться.name.text, побесноваться);

export { побесноваться };