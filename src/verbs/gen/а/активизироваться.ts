import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const активизироваться: PerfectVerb = {
  name: Word('активизироваться', 7),
  singular1stPerson: Word('активизируюсь', 7),
  singular2ndPerson: Word('активизируешься', 7),
  singular3rdPerson: Word('активизируется', 7),
  plural1stPerson: Word('активизируемся', 7),
  plural2ndPerson: Word('активизируетесь', 7),
  plural3rdPerson: Word('активизируются', 7),
  masculinePast: Word('активизировался', 7),
  femininePast: Word('активизировалась', 7),
  neuterPast: Word('активизировалось', 7),
  pluralPast: Word('активизировались', 7),
  imperativeInformal: Word('активизируйся', 7),
  imperativeFormal: Word('активизируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(активизироваться.name.text, активизироваться);

export { активизироваться };