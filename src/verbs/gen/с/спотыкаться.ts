import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спотыкаться: PerfectVerb = {
  name: Word('спотыкаться', 6),
  singular1stPerson: Word('спотыкаюсь', 6),
  singular2ndPerson: Word('спотыкаешься', 6),
  singular3rdPerson: Word('спотыкается', 6),
  plural1stPerson: Word('спотыкаемся', 6),
  plural2ndPerson: Word('спотыкаетесь', 6),
  plural3rdPerson: Word('спотыкаются', 6),
  masculinePast: Word('спотыкался', 6),
  femininePast: Word('спотыкалась', 6),
  neuterPast: Word('спотыкалось', 6),
  pluralPast: Word('спотыкались', 6),
  imperativeInformal: Word('спотыкайся', 6),
  imperativeFormal: Word('спотыкайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(спотыкаться.name.text, спотыкаться);

export { спотыкаться };