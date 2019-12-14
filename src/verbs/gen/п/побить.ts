import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побить: PerfectVerb = {
  name: Word('побить', 3),
  singular1stPerson: Word('побью', 4),
  singular2ndPerson: Word('побьёшь', 4),
  singular3rdPerson: Word('побьёт', 4),
  plural1stPerson: Word('побьём', 4),
  plural2ndPerson: Word('побьёте', 4),
  plural3rdPerson: Word('побьют', 4),
  masculinePast: Word('побил', 3),
  femininePast: Word('побила', 3),
  neuterPast: Word('побило', 3),
  pluralPast: Word('побили', 3),
  imperativeInformal: Word('побей', 3),
  imperativeFormal: Word('побейте', 3),
  imperfect: ['бить'],
};

perfectVerbs.set(побить.name.text, побить);

export { побить };