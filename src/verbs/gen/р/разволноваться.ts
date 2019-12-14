import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разволноваться: PerfectVerb = {
  name: Word('разволноваться', 9),
  singular1stPerson: Word('разволнуюсь', 7),
  singular2ndPerson: Word('разволнуешься', 7),
  singular3rdPerson: Word('разволнуется', 7),
  plural1stPerson: Word('разволнуемся', 7),
  plural2ndPerson: Word('разволнуетесь', 7),
  plural3rdPerson: Word('разволнуются', 7),
  masculinePast: Word('разволновался', 9),
  femininePast: Word('разволновалась', 9),
  neuterPast: Word('разволновалось', 9),
  pluralPast: Word('разволновались', 9),
  imperativeInformal: Word('разволнуйся', 7),
  imperativeFormal: Word('разволнуйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разволноваться.name.text, разволноваться);

export { разволноваться };