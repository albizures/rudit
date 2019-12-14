import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const адресоваться: PerfectVerb = {
  name: Word('адресоваться', 7),
  singular1stPerson: Word('адресуюсь', 5),
  singular2ndPerson: Word('адресуешься', 5),
  singular3rdPerson: Word('адресуется', 5),
  plural1stPerson: Word('адресуемся', 5),
  plural2ndPerson: Word('адресуетесь', 5),
  plural3rdPerson: Word('адресуются', 5),
  masculinePast: Word('адресовался', 7),
  femininePast: Word('адресовалась', 7),
  neuterPast: Word('адресовалось', 7),
  pluralPast: Word('адресовались', 7),
  imperativeInformal: Word('адресуйся', 5),
  imperativeFormal: Word('адресуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(адресоваться.name.text, адресоваться);

export { адресоваться };