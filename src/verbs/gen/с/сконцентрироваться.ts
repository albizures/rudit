import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сконцентрироваться: PerfectVerb = {
  name: Word('сконцентрироваться', 9),
  singular1stPerson: Word('сконцентрируюсь', 9),
  singular2ndPerson: Word('сконцентрируешься', 9),
  singular3rdPerson: Word('сконцентрируется', 9),
  plural1stPerson: Word('сконцентрируемся', 9),
  plural2ndPerson: Word('сконцентрируетесь', 9),
  plural3rdPerson: Word('сконцентрируются', 9),
  masculinePast: Word('сконцентрировался', 9),
  femininePast: Word('сконцентрировалась', 9),
  neuterPast: Word('сконцентрировалось', 9),
  pluralPast: Word('сконцентрировались', 9),
  imperativeInformal: Word('сконцентрируйся', 9),
  imperativeFormal: Word('сконцентрируйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(сконцентрироваться.name.text, сконцентрироваться);

export { сконцентрироваться };