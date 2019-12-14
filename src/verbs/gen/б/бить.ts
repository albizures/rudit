import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бить: PerfectVerb = {
  name: Word('бить', 1),
  singular1stPerson: Word('бью', 2),
  singular2ndPerson: Word('бьёшь', 2),
  singular3rdPerson: Word('бьёт', 2),
  plural1stPerson: Word('бьём', 2),
  plural2ndPerson: Word('бьёте', 2),
  plural3rdPerson: Word('бьют', 2),
  masculinePast: Word('бил', 1),
  femininePast: Word('била', 1),
  neuterPast: Word('било', 1),
  pluralPast: Word('били', 1),
  imperativeInformal: Word('бей', 1),
  imperativeFormal: Word('бейте', 1),
  imperfect: ['побить'],
};

perfectVerbs.set(бить.name.text, бить);

export { бить };