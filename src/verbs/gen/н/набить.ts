import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набить: PerfectVerb = {
  name: Word('набить', 3),
  singular1stPerson: Word('набью', 4),
  singular2ndPerson: Word('набьёшь', 1),
  singular3rdPerson: Word('набьёт', 1),
  plural1stPerson: Word('набьём', 1),
  plural2ndPerson: Word('набьёте', 1),
  plural3rdPerson: Word('набьют', 4),
  masculinePast: Word('набил', 3),
  femininePast: Word('набила', 3),
  neuterPast: Word('набило', 3),
  pluralPast: Word('набили', 3),
  imperativeInformal: Word('набей', 3),
  imperativeFormal: Word('набейте', 3),
  imperfect: [],
};

perfectVerbs.set(набить.name.text, набить);

export { набить };