import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ушить: PerfectVerb = {
  name: Word('ушить', 2),
  singular1stPerson: Word('ушью', 3),
  singular2ndPerson: Word('ушьёшь', 3),
  singular3rdPerson: Word('ушьёт', 3),
  plural1stPerson: Word('ушьём', 3),
  plural2ndPerson: Word('ушьёте', 3),
  plural3rdPerson: Word('ушьют', 3),
  masculinePast: Word('ушил', 2),
  femininePast: Word('ушила', 2),
  neuterPast: Word('ушило', 2),
  pluralPast: Word('ушили', 2),
  imperativeInformal: Word('ушей', 2),
  imperativeFormal: Word('ушейте', 2),
  imperfect: [],
};

perfectVerbs.set(ушить.name.text, ушить);

export { ушить };