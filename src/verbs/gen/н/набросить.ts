import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набросить: PerfectVerb = {
  name: Word('набросить', 4),
  singular1stPerson: Word('наброшу', 4),
  singular2ndPerson: Word('набросишь', 4),
  singular3rdPerson: Word('набросит', 4),
  plural1stPerson: Word('набросим', 4),
  plural2ndPerson: Word('набросите', 4),
  plural3rdPerson: Word('набросят', 4),
  masculinePast: Word('набросил', 4),
  femininePast: Word('набросила', 4),
  neuterPast: Word('набросило', 4),
  pluralPast: Word('набросили', 4),
  imperativeInformal: Word('набрось', 4),
  imperativeFormal: Word('набросьте', 4),
  imperfect: [],
};

perfectVerbs.set(набросить.name.text, набросить);

export { набросить };