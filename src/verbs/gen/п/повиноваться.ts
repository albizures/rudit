import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повиноваться: PerfectVerb = {
  name: Word('повиноваться', 7),
  singular1stPerson: Word('повинуюсь', 5),
  singular2ndPerson: Word('повинуешься', 5),
  singular3rdPerson: Word('повинуется', 5),
  plural1stPerson: Word('повинуемся', 5),
  plural2ndPerson: Word('повинуетесь', 5),
  plural3rdPerson: Word('повинуются', 5),
  masculinePast: Word('повиновался', 7),
  femininePast: Word('повиновалась', 7),
  neuterPast: Word('повиновалось', 7),
  pluralPast: Word('повиновались', 7),
  imperativeInformal: Word('повинуйся', 5),
  imperativeFormal: Word('повинуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(повиноваться.name.text, повиноваться);

export { повиноваться };